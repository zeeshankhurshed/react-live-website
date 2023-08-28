import React from 'react'

function Modal({openModal}) {
  return (
    <>
     <div className="modal-overlay">
      <div className="modal-inner">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam perferendis hic iusto provident nesciunt temporibus et rerum aliquam, voluptas cum, itaque quidem quae vero! Dolorem molestias dignissimos illo necessitatibus! Laudantium, provident magni aliquam mollitia magnam eligendi non culpa ullam quo nesciunt ab inventore animi cupiditate, quis minus itaque excepturi sint sapiente eos aperiam corporis debitis id distinctio. Natus obcaecati accusamus optio, nemo blanditiis ipsum? Doloribus sed dicta modi deserunt iusto corrupti reiciendis illo! Quae dicta, at blanditiis deserunt molestias, debitis ipsum deleniti magnam reiciendis tenetur sint, exercitationem sunt libero reprehenderit? Libero dolorum iure enim suscipit qui ut dicta velit sunt saepe eius non consectetur vero at corporis nemo odit sequi, in eligendi consequuntur quisquam mollitia assumenda necessitatibus! Aliquam recusandae ratione tenetur vero mollitia quos, iure possimus deleniti, maxime nihil aspernatur voluptas unde ullam, culpa asperiores? Deserunt quam animi non molestiae, quaerat, ad inventore dolores eius incidunt, voluptatum ratione dolorem numquam asperiores accusamus! Nam, nesciunt modi alias ab doloribus facere, aliquid itaque eius placeat fugit suscipit in recusandae nostrum ut numquam similique assumenda quae unde reiciendis molestiae perferendis, tempore veritatis enim? Debitis modi voluptates dignissimos aliquid repellat, laborum soluta voluptatum quisquam sint sequi itaque ducimus esse! Nisi, praesentium? Laboriosam, nostrum aperiam?</p>
        <button className="closebtn btn btn-danger" onClick={openModal}>x</button>
      </div>
      </div> 
    </>
  )
}

export default Modal
