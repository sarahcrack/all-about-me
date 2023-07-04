import React from "react";
import CodingJournal from "../../Data/coding-journal.json";

function LearnerJournal() {
  return (
    <div className="coding-journal-container">
      {CodingJournal.map((item, index) => {
        return (
          <div className="coding-journal-item" key={index}>
            <h1 className="coding-journal-week">WEEK {item.week}</h1>
            <h2 className="coding-journal-day">Day {item.day}</h2>
            <p className="coding-journal-today-progress">{item.progress}</p>
            <p className="coding-journal-today-thoughts">{item.thoughts}</p>
            {item.links && item.links.length > 0 && (
              <div>
                {item.links.map((link, index) => (
                  <div key={index}>
                    <p>Useful Links:</p>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.title}
                    </a>
                  </div>
                ))}
              </div>
            )}

            {item.imageUrls && item.imageUrls.length > 0 && (
              <div>
                {item.imageUrls.map((imageUrl, index) => (
                  <div key={index}>
                    <p>{imageUrl.title}</p>
                    <img src={imageUrl.path} alt={imageUrl.alt} />
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default LearnerJournal;
