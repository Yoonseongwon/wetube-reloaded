
export const trending = (req, res) => {
    const videos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return res.render("home", {pageTitle : "Home", videos : videos});
}
export const see = (req, res) => {
    console.log(req.params);
    return res.render("watch");
}
export const edit = (req, res) => {
    console.log(req.params);
    return res.render("edit");
}
export const search = (req, res) => res.send("serach");
export const upload = (req, res) => res.send("Upload Video");
export const deleteVideo = (req, res) => {
    console.log(req.params);
    return res.send("Delete Video");
}