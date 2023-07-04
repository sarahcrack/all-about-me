import React from "react";
import CodingJournal from "../../Data/coding-journal.json";
import { Card, SimpleGrid } from "@chakra-ui/react";

function LearnerJournal() {
  return (
    <div className="coding-journal-container">
      <SimpleGrid columns={2} spacing={10} minChildWidth={400}>
        {CodingJournal.map((item, index) => (
          <Card key={index} className="coding-journal-item">
            <h1 className="coding-journal-week">WEEK {item.week}</h1>
            <h2 className="coding-journal-day">Day {item.day}</h2>
            <p className="coding-journal-today-progress">
              Today's Progress {item.progress}
            </p>
            <p className="coding-journal-today-thoughts">
              Thoughts {item.thoughts}
            </p>
            {item.links && item.links.length > 0 && (
              <div>
                <p>Useful Links:</p>
                {item.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.title}
                  </a>
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
          </Card>
        ))}
      </SimpleGrid>
    </div>
  );
}

export default LearnerJournal;
