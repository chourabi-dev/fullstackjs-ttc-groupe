export default function UserCard(props){
    return(
        <div className="col-sm-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <h3>{ props.fullname }</h3>
                            <p className="text-muted">{ props.email }</p>
                        </div>
                    </div>
                </div>
                
    );
}