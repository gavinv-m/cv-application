import DownloadIcon from './icons/Download';

// Exports to app.jsx
export default function Header({ downloadPDF }) {
  return (
    <div className="header">
      <h1>CV Builder</h1>
      <DownloadIcon downloadPDF={downloadPDF}></DownloadIcon>
    </div>
  );
}
