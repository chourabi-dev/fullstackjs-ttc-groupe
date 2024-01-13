import LikeButton from "./like_button";

export default function Article(props){
    return(
        <div className="card mb-3">
            <div className="card-body">
                <h3>{ props.title }</h3>
                <p className="text-muted">
                    { props.content }
                </p>
                <LikeButton likes={ props.likes } />

            </div>
        </div>
    );
}