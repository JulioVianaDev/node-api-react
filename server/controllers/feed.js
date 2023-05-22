exports.getPosts = (req,res,next)=>{
    res.status(200).json({
        posts: [{title: "primeiro post",content: "meu primeiro post"}]
    })
}

exports.createPost= (req,res,next)=>{
    const title = req.body.title;
    const content = req.body.content;
    res.status(201).json({
        message: "Post criado com sucesso",
        post: {id: new Date().toISOString(),title: title,content: content}
    })
}