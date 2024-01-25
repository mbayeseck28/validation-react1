const Load = () => {
    return(
        <div className="col-sm-6 mb-0 mb-sm-4 ">
            <div class="card" aria-hidden="true">
                <div class="card-body">
                    <h5 class="card-title placeholder-glow">
                    <span class="placeholder col-6"></span>
                    </h5>
                    <p class="card-text placeholder-glow">
                    <span class="placeholder col-7"></span>
                    <span class="placeholder col-4"></span>
                    <span class="placeholder col-4"></span>
                    <span class="placeholder col-6"></span>
                    <span class="placeholder col-8"></span>
                    </p>
                    <a class="btn btn-warning disabled placeholder col-6" aria-disabled="true"></a>
                </div>
            </div>   
        </div>
    )
}

const Loading = () => {
  return (
    <div className='row'>
        <Load />
        <Load />
        <Load />
        <Load />
        <Load />
        <Load />
        <Load />
        <Load />
        <Load />
    </div>
  )
}

export default Loading
