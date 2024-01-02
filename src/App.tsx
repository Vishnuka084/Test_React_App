
import './App.css'

const customers=[
    {
        id:'1',
        avatar:'https://s3.scoopwhoop.com/anj/Photo/1f89a82b-e9d5-4a17-85fa-bed7c1b2a471.jpg',
        customerName:'Rock Siri',
        description:'Some quick example text to build on the card title and make up the bulk of thet.',
        userProfile:''
    },
        {
        id:'2',
        avatar:'https://s3.scoopwhoop.com/anj/Photo/1f89a82b-e9d5-4a17-85fa-bed7c1b2a471.jpg',
        customerName:'Iorn Man',
        description:'Some quick example text to build on the card title and make up the bulk of the card s content.',
        userProfile:''
    },
        {
        id:'3',
        avatar:'https://s3.scoopwhoop.com/anj/Photo/1f89a82b-e9d5-4a17-85fa-bed7c1b2a471.jpg',
        customerName:'Katniss Evendreena ',
        description:'Some quick example text to build on the card title and make up the bulk of the card s content.',
        userProfile:''
    },
        {
        id:'4',
        avatar:'https://s3.scoopwhoop.com/anj/Photo/1f89a82b-e9d5-4a17-85fa-bed7c1b2a471.jpg',
        customerName:'Golum ',
        description:'Some quick example text to build on the card title and make up the bulk of the card s content.',
        userProfile:''
    },
        {
        id:'5',
        avatar:'https://s3.scoopwhoop.com/anj/Photo/1f89a82b-e9d5-4a17-85fa-bed7c1b2a471.jpg',
        customerName:'Priyana Seendy',
        description:'Some quick example text to build on the card title and make up the bulk of the card s content.',
        userProfile:''
    },

];

function App() {

    return (
        <>
            <h1>Customer Data</h1>
            <hr/>
            {
                customers.map((customer)=>{
                    return(
                        <div>
                            <h1>{customer.customerName}</h1>
                            <div className="card" >
                                <img src="https://s3.scoopwhoop.com/anj/Photo/1f89a82b-e9d5-4a17-85fa-bed7c1b2a471.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>

                        )
                })
            }

        </>
    );
}

export default App
