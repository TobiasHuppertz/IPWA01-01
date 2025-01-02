import { legalnotice } from "../constants";

export default function LegalNotice() {
  return (
    <div className="mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Impressum</h1>
      <div className="bg-white p-6">
        <h2 className="text-xl font-semibold mb-2">Angaben gemäß § 5 TMG</h2>
        <p className="mb-4">
            {legalnotice.company}<br />
            {legalnotice.street}<br />
            {legalnotice.zipcode} {legalnotice.city}
        </p>
        <h2 className="text-xl font-semibold mb-2">Vertreten durch</h2>
        <p className="mb-4">{legalnotice.ceo}</p>
        <h2 className="text-xl font-semibold mb-2">Kontakt</h2>
        <p className="mb-4">
            Telefon: {legalnotice.phone}<br />
            E-Mail: {legalnotice.email}
        </p>
        <h2 className="text-xl font-semibold mb-2">Umsatzsteuer-ID</h2>
        <p className="mb-4">
            Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz: {legalnotice.taxID}
        </p>
        <h2 className="text-xl font-semibold mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
        <p className="mb-4">
            {legalnotice.company}<br />
            {legalnotice.street}<br />
            {legalnotice.zipcode} {legalnotice.city}
        </p>
        <h2 className="text-xl font-semibold mb-2">Haftungsausschluss</h2>
        <p className="mb-4">
          <strong>Haftung für Inhalte</strong><br />
          {legalnotice.paragraphContent}
        </p>
        <p className="mb-4">
          <strong>Haftung für Links</strong><br />
          {legalnotice.paragraphLink}
        </p>
        <h2 className="text-xl font-semibold mb-2">Urheberrecht</h2>
        <p className="mb-4">
          {legalnotice.paragraphCopyright}
        </p>
      </div>
    </div>
  );
}
