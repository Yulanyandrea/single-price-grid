import './SinglePriceGrid.css';

function SinglePriceGrid (){
    return (
        <main class="container">
        
        <div class="square1 padding" >
            <h1 class="title">Join our community</h1>
            <h2 class="second">30-day,hassle-free money back guarantee</h2>
            <p class="paragraph">Gain access to our full library of tutorials along width
                expert code reviews. Perfect for any developers who are serious about honing their skills.
            </p>
        </div>
        <div class="botton">
            <div class="square2 padding">
                <h2 class="square2_h2">Monthly Subscription</h2>
                <p class="number"> <span class="price">$29</span> per month</p>
                <p class="text"> Full access for less than $1 a day</p>
                <button id="signUp" >Sign Up</button>
            </div>

            <div class="square3 padding">
                <h2 class="text3">Why Us</h2>
                <ul class="list">
                    <li>Tutorials by industry experts</li>
                    <li>Peer & expert code review </li>
                    <li> Coding exercises</li>
                    <li> Access to our GitHub repos</li>
                    <li> Community forum</li>
                    <li>Flashcard decks</li>
                    <li>New videos every week</li>
                </ul>
                
            </div>

    </div>

        
    </main>
    )
}

export default SinglePriceGrid