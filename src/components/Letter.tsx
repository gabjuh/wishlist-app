const Letter = () => {
  return (
    <div
      className="max-w-[1200px] mx-auto lg:px-16 md:px-10 sm:px-5 px-3 hyphens-auto pb-8 pt-14 text-justify"
      lang="de"
      id="letter"
    >
      <p className="drop-shadow-[1px_1px_0.2px_rgba(0,0,0,0.5)]">
        Liebe Eltern,
      </p>
      <p className="drop-shadow-[1px_1px_0.2px_rgba(0,0,0,0.5)]">
        dieses Jahr hat sich unsere Tochter ausschließlich LEGO gewünscht, und
        wir möchten euch einladen, an ihrem Wunsch teilzuhaben. Wir haben einen
        Online-Geschenkkorb zusammengestellt, der nur LEGO-Spielzeuge enthält.
        Damit es keine doppelten Geschenke gibt, könnt ihr euch hier ein oder
        mehrere Produkte auswählen und uns so helfen, ihren Geburtstag
        unvergesslich zu machen.
      </p>
      <p className="font-bold drop-shadow-[1px_1px_0.2px_rgba(0,0,0,0.5)] !mt-10">
        So funktioniert es:
      </p>
      <ol>
        <li className="list-decimal !ml-10 !mb-6 drop-shadow-[1px_1px_0.2px_rgba(0,0,0,0.5)]">
          <span className="font-bold">Auswahl treffen:</span> Klickt einfach auf
          den Namen des gewünschten Produkts. Ihr werdet dann zur Amazon-App
          weitergeleitet (ihr müsst euch möglicherweise anmelden oder die App
          herunterladen), um das Produkt zu sehen. Natürlich könnt ihr das
          Spielzeug auch woanders kaufen, wo es vielleicht günstiger ist.
        </li>
        <li className="list-decimal !ml-10 !mb-6 drop-shadow-[1px_1px_0.2px_rgba(0,0,0,0.5)]">
          <span className="font-bold">Preisübersicht:</span> Die Preise sind
          oben in der Tabelle sortierbar, um euch eine bessere Übersicht zu
          geben. Die angegebenen Preise sind manuell übernommen worden und
          können sich mit der Zeit ändern. Unter dem aktuellen Preis steht auch
          der ursprüngliche Preis.
        </li>
        <li className="list-decimal !ml-10 !mb-6 drop-shadow-[1px_1px_0.2px_rgba(0,0,0,0.5)]">
          <span className="font-bold">Status überprüfen:</span> Jedes Produkt
          hat einen Button, mit dem ihr sehen könnt, ob das Spielzeug schon
          gekauft wurde oder nicht. Bitte kauft das Produkt erst und klickt dann
          auf den Button, um zu signalisieren, dass es bereits gekauft wurde,
          damit andere Eltern ein anderes Spielzeug wählen können.
        </li>
      </ol>
      <p className="drop-shadow-[1px_1px_0.2px_rgba(0,0,0,0.5)] !mt-10">
        Vielen Dank für eure Unterstützung und viel Spaß beim Aussuchen der
        Geschenke!
      </p>
      <p className="drop-shadow-[1px_1px_0.2px_rgba(0,0,0,0.5)]">
        Herzliche Grüße,
      </p>
      <p className="drop-shadow-[1px_1px_0.2px_rgba(0,0,0,0.5)]">
        Familie Juhász
      </p>
    </div>
  );
};

export default Letter;
