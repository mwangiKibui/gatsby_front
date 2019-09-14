import React,{Component} from "react";
import {MdUpdate,MdPersonOutline} from "react-icons/md";
import {Link} from "gatsby";
import '../../styles/components.css';
import classNames from 'classnames';

class NewsCard extends Component {
    render(){
        const {edge,related} = this.props;
        const layoutClasses = classNames('news__card',{
            'col-sm-4':related,
            'col-sm-6':!related
        })
    return (
        <div className={layoutClasses}>
            <span className="badge badge-danger">{edge.node.category}</span>
            <div className="news__card_image-holder">
                <Link to={`/news/${edge.node.category}/${edge.node.id}`}>
                    <img src={edge.node.profile.file.url} className="news__card_image" alt="news_image" />
                </Link>
            </div>
            <div className="news__card_content_holder">
                <Link to={`/news/${edge.node.category}/${edge.node.id}`} className="news__card_content-heading">
                    <h5>{edge.node.title}</h5>
                </Link>
                <div className="news__card_sub-content_holder">
                    <div className="date">
                        <p className="text-muted">
                            <MdUpdate /> {edge.node.publishedDate}
                        </p>
                    </div>
                    <div className="writer">
                        <p>
                            <MdPersonOutline /> {edge.node.writer}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}};
NewsCard.defaultProps = {
    related:false
}
export default NewsCard;
