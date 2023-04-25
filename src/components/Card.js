import React from 'react'
import '../components/Card.css'
export default function Card() {
    return (
        <div>
            <article class="card">
                <img
                    class="card__background"
                    src="https://images.unsplash.com/photo-1549388604-817d15aa0110?w=248&fit=crop&auto=format.jpeg"
                    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                    width="1920"
                    height="2193"
                />
                <div class="card__content | flow">
                    <div class="card__content--container | flow">
                        <h2 class="card__title">Lorem ipsum</h2>
                        <p class="card__description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
                            labore laudantium deserunt fugiat numquam.
                        </p>
                    </div>
                    <button class="card__button">Read more</button>
                </div>
            </article>
        </div>
    )
}
