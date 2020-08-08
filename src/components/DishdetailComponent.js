import React, { Component } from 'react';
import { Card,CardBody,CardImg,CardText,CardTitle,} from 'reactstrap';


class Dishdetail extends Component
{

    // constructor(props)
    // {
    //     super(props);
    // }

    renderDish(dish) {
        if (dish != null)
            return(
                <div  className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
            );
        else
            return(
                <div></div>
            );
    }


    renderComments(comm)
    {
        if(comm == null)
        {
            return(<div></div>);
        }
        const cmnts = comm.map(comment =>{

            return(
               
                <li key={comment.id}>
                    <p>{comment.comment}</p>
            <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit'
                        }).format(new Date(comment.date))}</p>
                    </li>

            )
        });

        return(
            <div className = "col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className='list-unstyled'>
                {cmnts}
                </ul> 
            </div>
        );
    }

    render()
    {
        const dish = this.props.dish;
        if(dish == null)
        {
            return(<div></div>);
        }

        const dishes = this.renderDish(dish);
        const comments = this.renderComments(dish.comments);

        return(
            <div className='row'>
            {dishes}
            {comments}
            </div>
        );

    }

}

export default Dishdetail;