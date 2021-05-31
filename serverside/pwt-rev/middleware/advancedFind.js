


const advancedFind = (model) =>  async (req, res, next)=> {

    const reqQuery = {...req.query};
    console.log('Req Query object: ', reqQuery)
   
    //Logic to remove field & delete from reqQuery
    const removeFields = ['select', 'sort'];
    removeFields.forEach(param=> delete reqQuery[param])

    console.log('Req query object after deletion: ', reqQuery);

    let queryStr = JSON.stringify(reqQuery);

    let query = model.find(JSON.parse(queryStr))
    

    // Select fields name,email => name email
    if(req.query.select){
        const fields = req.query.select.split(',').join(' ');
        console.log(fields);
        query = query.select(fields)
    }
    // Sort fields
    if(req.query.sort){
        const sortBy = req.query.sort.split(',').join(' ');
        console.log(sortBy);
        query = query.sort(sortBy)
    }
    else{
        query= query.sort('-createdAt')
    }

    const results = await query;

    res.advancedResults = {
        success: true,
        count: results.length,
        data: results
    };
    next();
}


module.exports = advancedFind;