// TuesdaY 6th Sept. Dynamic Props/ Controlled Form
import React from 'react';
const DynamicProps = ({name,age,img,phone,email,fav}) => {
  return (
    <div className= "card" style = {{border:'1px solid teal',width:'330px',height:'500px'}}>
     {img ? (<div className="top"style = {{width:'330px',height:'300px'}}>
          <img 
          style = {{objectFit:'cover',width:"100%",height:'100%'}}
          src= {img} alt="image of someone"/>
      </div>) : null}
     <div className="bottom" style = {{padding:'0px 1rem'}}>
     {name &&  <h4 className="name">name: 
          <span className="span"  style = {{padding:'0px 0.25rem'}}>{name}</span>
          </h4>}
          {age && <h4 className="name">age: 
          <span className="span" style = {{padding:'0px 0.25rem'}}>{age}</span>
          </h4>}
          {email && <h4 className="name">email: 
          <span className="span" style = {{padding:'0px 0.25rem'}}>{email}</span>
          </h4>}
         {phone && <h4 className="name">phone: 
          <span className="span" style = {{padding:'0px 0.25rem'}}>{phone}</span>
          </h4>}
         {fav && <h4 className="name">favourite: 
          <span className="span" style = {{padding:'0px 0.25rem'}}>{fav}</span>
          </h4>}
      </div>
    </div>
  );
}

export default DynamicProps;
