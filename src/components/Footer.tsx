
const Footer = () => {
  return (
    <div className="text-[#ddd] bg-gradient-to-b from-[#606888] to-[#3f4a6b]">
      <footer className="p-10 w-[100%]">
        <p className="text-center">
          <a href="mailto:info@gaborjuhasz.de" className="hover:text-[#777] transition-all duration-200">Kontakt</a> | <a className="hover:text-[#777] transition-all duration-200" href="/impressum">Impressum</a>
        </p>
          <p className="text-center w-[100%] text-sm mt-2">Ⓒ Gábor Juhász</p>
          <p className="text-center w-[100%] text-xs mt-2">2024</p>
        </footer>
    </div>
  )
}

export default Footer