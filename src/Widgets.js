import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";


function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets_article">
            <div className="widgets_articleleft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets_articleright">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );
    return (
        <div className="widgets">
            <div className="widgets_header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("I am Back!!", "Top news - 9099 readers")}
            {newsArticle("Coronavirus IN updates", "Top news - 886 readers")}
            {newsArticle("Coronavirus IN updates", "Top news - 886 readers")}
            {newsArticle("Coronavirus IN updates", "Top news - 886 readers")}
            {newsArticle("Coronavirus IN updates", "Top news - 886 readers")}
            {newsArticle("Coronavirus IN updates", "Top news - 886 readers")}

        </div>
    );
}

export default Widgets;