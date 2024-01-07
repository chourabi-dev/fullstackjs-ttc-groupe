export default function Contact(props){
    
    const oldTitle = <h3 className="old-user" >{ props.fullname }</h3>
    const newTitle = <h3 className="new-user" >{ props.fullname }</h3>
    

        
    return(
        <div>
            { /*props.old == true ? newTitle : oldTitle */}


            <h3 className={ props.old == true ? 'new-user': 'old-user' } >{ props.fullname }</h3>
            <p>
                { props.email }
            </p>
            <p>
                { props.address }
            </p>
        </div>
    );
}

