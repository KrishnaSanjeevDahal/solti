exports.home = (req,res)=>{
    res.render("home");
};

exports.renderCreateBlog = (req,res)=>{
    res.render("createBLog");
};

exports.renderBLogs = (req,res)=>{
    res.render("blogs");
};

