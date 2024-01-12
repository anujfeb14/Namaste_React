const Contact = () =>{
    return (
        <div>
            <h1 className="font-bold text-3xl p-2 m-2">Welcome to our Contact Page.</h1>
            <form>
                <input type="text" className=" border border-black p-2 m-2" placeholder="Name"/>
                <input type="text" className="border border-black p-2 m-2" placeholder="Message"/>
                <button className="border border-black p-2 m-2 rounded-lg bg-gray-200"> Submit </button>
            </form>
        </div>
    )
}

export default Contact;