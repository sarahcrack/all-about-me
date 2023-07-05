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

function LearnerJournal() {
  return (
    <div className="coding-journal-container">
      <SimpleGrid columns={2} spacing={10} minChildWidth={400}>
        {CodingJournal.map((item, index) => (
          <Card key={index} className="coding-journal-item" mt={10} mb={10}>
            <CardHeader>
              <Flex>
                <Box w="50%">
                  <h1 className="headings">WEEK {item.week}</h1>
                </Box>
                <Box w="50%">
                  <h1 className="headings">Day {item.day}</h1>
                </Box>
              </Flex>
            </CardHeader>
            <CardHeader>
              <h1 className="headings">Today's Progress</h1>
            </CardHeader>
            <p className="coding-journal-today-progress">{item.progress}</p>
            <CardHeader>
              <h1 className="headings">Thoughts 💭</h1>
            </CardHeader>
            <p className="coding-journal-thoughts">{item.thoughts}</p>
            <Divider color="#FCDDEC" mt={5} />
            <div>
              {item.links && item.links.length > 0 && (
                <>
                  <CardHeader>
                    <h1 className="headings">Useful Links:</h1>
                  </CardHeader>
                  {item.links.map((link, index) => (
                    <Text
                      as="a"
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      textDecoration="underline"
                      _hover={{ color: "#7A9E9F" }}
                    >
                      {link.title}
                    </Text>
                  ))}
                </>
              )}
            </div>

            <div>
              {item.imageUrls && item.imageUrls.length > 0 && (
                <Box>
                  {item.imageUrls.map((imageUrl, index) => (
                    <div key={index}>
                      <Text size="xs" fontStyle="italic">
                        {imageUrl.title}
                      </Text>
                      <img src={imageUrl.path} alt={imageUrl.alt} />
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
