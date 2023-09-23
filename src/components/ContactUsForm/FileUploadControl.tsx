import React, { SetStateAction, useState } from "react";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";

interface FileUploadControlProps {
  selectedFiles: File[];
  setSelectedFiles: React.Dispatch<SetStateAction<File[]>>;
}

const FileUploadControl = ({
  selectedFiles,
  setSelectedFiles,
}: FileUploadControlProps) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files as FileList);
    setSelectedFiles(files);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    setSelectedFiles(files);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <VStack w="100%" spacing={4} align="center">
      <Text fontSize={["xs", "lg"]}>Choose files</Text>
      <Box
        p={6}
        w="100%"
        borderWidth={2}
        borderStyle="dashed"
        borderRadius="md"
        borderColor="gray.300"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        cursor="pointer"
      >
        <HStack color="grey" spacing={["5px", "10px"]} justifyContent="center">
          <Text fontSize={["xs", "lg"]} textAlign="center">
            Drag & Drop your files or
          </Text>
          <Text
            fontSize={["xs", "lg"]}
            textDecoration="underline"
            colorScheme="teal"
            as="label"
            htmlFor="projectFiles"
          >
            Browse
          </Text>
          <input
            id="projectFiles"
            type="file"
            multiple
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </HStack>
      </Box>
      {selectedFiles.length > 0 && (
        <Box>
          <Text fontSize="lg">Selected Files:</Text>
          <ul>
            {selectedFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </Box>
      )}
    </VStack>
  );
};

export default FileUploadControl;
