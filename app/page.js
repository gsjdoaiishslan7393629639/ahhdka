export default function home(){
    const aa = async(e)=>{
        'use server'
        console.log(e.get('a'))
    }
    return(
        <form action={aa}>
<input name="a"></input>
<button type="submit">Submit</button>
        </form>
    )
}