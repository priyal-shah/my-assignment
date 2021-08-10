import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle , Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
    

	function RenderDish({selectedDish}) {
        
            return(
                <Card>
                    <CardImg top src={selectedDish.image} alt={selectedDish.name} />
                    <CardBody>
                      <CardTitle>{selectedDish.name}</CardTitle>
                      <CardText>{selectedDish.description}</CardText>
                    </CardBody>
                </Card>
            );
    }



     function RenderComments({comments}){
		if(comments != null){
			const dishcomment =comments.map((dishcom) => {
				return(
					<li key={dishcom.id}>
				        <p>{dishcom.comment}</p>
	 						<p>--{dishcom.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(dishcom.date)))}</p> 
 					
					</li>
				)
			});
            return(
                <div>
                	<h4>Comments</h4>
                	<div>
                		<ul className="list-unstyled">
                			{dishcomment}
                		</ul>
                	</div>
                </div>
            );
         }
        else
            return(
                <div> </div>
            );
	}



	const DishDetail= ( props) =>{
		if(props.selectedDish!=null){
			return(
			<div className="container">
				<div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.selectedDish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.selectedDish.name}</h3>
                        <hr />
                    </div>                
                </div>
				<div className="row">
					<div className="col-12 col-sm-12 col-md-5 m-1"> 
						<RenderDish selectedDish={props.selectedDish}/>
					</div>

					<div className="col-12 col-sm-12 col-md-5 m-1"> 
						<RenderComments comments={props.comments}/>
					</div>

				</div> 
			</div>

			);
		}

		else{
			return(
				<div></div>
			);
		}

	}



export default DishDetail;