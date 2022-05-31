const AnnouncementModel = require("../models/announcement.model");

// get all Announcement list
exports.getAnnouncementList = (req, res) => {
    console.log('here all announcement list');
    AnnouncementModel.getAllAnnouncements((err, announcements) => {
        console.log("announcement fetched");
        if (err) res.send(err);
        res.status(200).json(announcements); 
    });
};

// create new Announcement
exports.createNewAnnouncement = (req, res) => {
    const announcementReqData = {
        title: req.body.newannouncment.title,
        description: req.body.newannouncment.description,
        dep: req.body.ldep
    };
    AnnouncementModel.createAnnouncement(announcementReqData, (err, announcement) => {
        if (err) res.send(err);
        res.json({
            status: true,
            message: "announcement Created Successfully",
            data: announcement
        });
    });
};
