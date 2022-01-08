let videos = [
    {
        title: "First Video",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id:1

    },
    {
        title: "Second Video",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id:2

    },
    {
        title: "Third Video",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id:3

    }
];
export const trending = (req, res) => {
    return res.render("home", {pageTitle : "Home", videos : videos});
}
export const watch = (req, res) => {
    const id = req.params.id;
    const video = videos[id-1];
    res.render("watch", {pageTitle : `Watching ${video.title}`, video : video});
}
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("serach");
export const upload = (req, res) => res.send("Upload Video");
export const deleteVideo = (req, res) => res.send("Delete Video");
