
const Nav = ({
  isAdminLoggedIn
}: {
  isAdminLoggedIn: boolean
}) => {
  return (
    <div className="bg-[#ddd] h-16 flex">
      <div className="pt-4 pl-5 text-xl flex-grow">Geschenkkorb für Hannah</div>
      {isAdminLoggedIn && <div className="pt-4 px-5 text-xl">
        <a href="#">Admin</a>
      </div>}
    </div>
  )
}

export default Nav