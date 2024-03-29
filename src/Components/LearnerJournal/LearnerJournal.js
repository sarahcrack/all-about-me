import React from "react";
import CodingJournal from "../../Data/coding-journal.json";
import {
  Card,
  CardHeader,
  SimpleGrid,
  Flex,
  Box,
  Divider,
  Text,
} from "@chakra-ui/react";
import "./LearnerJournal.css";
import WeeklySummary from "./WeeklySummary";

//
function LearnerJournal() {
  // variable to store the week colors for the coding journal headings
  const weekColors = [
    "rgba(184, 215, 241, 0.5)",
    "rgba(252, 221, 236, 0.5)",
    "rgba(122, 158, 159, 0.5)",
    "rgba(254, 95, 85, 0.5)",
  ];

  return (
    <div className="coding-journal-container">
      <WeeklySummary />

      {/* Start of Learner Journal Cards */}
      <SimpleGrid columns={2} spacing={10} minChildWidth={500}>
        {CodingJournal.map((item, index) => (
          <Card
            key={index}
            className="coding-journal-item"
            mt={10}
            mb={10}
            ml={3}
            mr={3}
          >
            <CardHeader>
              <Flex>
                <Box w="50%" mr={1}>
                  <h1
                    className="headings"
                    // weekColors is an array of colors for each week in the journal. the background style for the h1 element uses weekColors[item.week - 1] to assign the same color to each week.
                    style={{ background: weekColors[item.week - 1] }}
                  >
                    WEEK {item.week}
                  </h1>
                </Box>
                <Box w="50%" ml={1}>
                  <h1
                    className="headings"
                    style={{ background: weekColors[item.week - 1] }}
                  >
                    Day {item.day}
                  </h1>
                </Box>
              </Flex>
            </CardHeader>
            <CardHeader>
              <h1
                className="headings"
                style={{ background: weekColors[item.week - 1] }}
              >
                Today's Progress
              </h1>
            </CardHeader>
            <p className="coding-journal-today-progress">{item.progress}</p>
            <CardHeader>
              <h1
                className="headings"
                style={{ background: weekColors[item.week - 1] }}
              >
                Thoughts 💭
              </h1>
            </CardHeader>
            <p className="coding-journal-thoughts">{item.thoughts}</p>
            <Divider color="#FCDDEC" mt={5} />

            <div>
              {item.links && item.links.length > 0 && (
                <>
                  <CardHeader>
                    <h1
                      className="headings"
                      style={{ background: weekColors[item.week - 1] }}
                    >
                      Useful Links:
                    </h1>
                  </CardHeader>
                  {item.links.map((link, index) => (
                    <React.Fragment key={index}>
                      {index > 0 && <br />}{" "}
                      {/* Add a line break for all links except the first one */}
                      <Text
                        as="a"
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        textDecoration="underline"
                        _hover={{ color: "#7A9E9F" }}
                        className="coding-journal-links"
                      >
                        {link.title}
                      </Text>
                    </React.Fragment>
                  ))}
                </>
              )}
            </div>

            <div>
              {item.imageUrls && item.imageUrls.length > 0 && (
                <Box mb={2}>
                  {item.imageUrls.map((imageUrl, index) => (
                    <div key={index}>
                      <Text size="xs" fontStyle="italic" mb={1} mt={1}>
                        {imageUrl.title}
                      </Text>
                      <Flex justifyContent="center" alignItems="center">
                        <img
                          src={imageUrl.path}
                          alt={imageUrl.alt}
                          className="coding-journal-image"
                          style={{
                            width: "70%",
                            height: "70%",
                            objectFit: "cover",
                          }}
                        />
                      </Flex>
                    </div>
                  ))}
                </Box>
              )}
            </div>
          </Card>
        ))}
      </SimpleGrid>
    </div>
  );
}

export default LearnerJournal;
