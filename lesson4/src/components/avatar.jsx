const Avatar = ({name,role})=>{
    name="Văn Quyền"
    return <div className="flex items-center">
        <h1>{name}</h1>
        <img className="border-2 border-white rounded-[50%]" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/333106395_121569310841722_1426523328021879957_n.jpg?stp=dst-jpg_s206x206&_nc_cat=110&ccb=1-7&_nc_sid=aee45a&_nc_ohc=-ASxIrNPWxwAX8Dd38Q&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRDSkct1Ip5ExDcrw5cCnQoQk0t2P392Zka-q_lJ6SUDw&oe=64432C66" alt="" />
        <p >{role}</p>
        <button className="bg-pink-400">Show Info</button>
    </div>
}
export default Avatar