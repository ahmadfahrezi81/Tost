import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import Button from "@/ui/Button";
import Input from "@/ui/Input";
import Icons from "@/components/Icons";
import { toast } from "@/ui/Toast";

export const UploadImage = ({
    className,
    setImageURLChild,
    imageURLString,
}: any) => {
    const [files, setFiles] = useState<any>();
    const [imageURL, setImageURL] = useState(imageURLString);
    const [isLoading, setIsLoading] = useState(false);

    // receive the accepted files and rejected files
    const onDrop = useCallback((acceptedFiles: any) => {
        console.log(acceptedFiles);
        if (acceptedFiles) {
            const file = acceptedFiles[0]; // Get the first file from the acceptedFiles array
            const fileWithPreview = Object.assign(file, {
                preview: URL.createObjectURL(file),
            });

            setFiles(fileWithPreview);
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
        useDropzone({
            onDrop,
            accept: {
                "image/jpeg": [],
                "image/png": [],
            },
        });

    const handleSubmit = async (files: any) => {
        if (!files) {
            throw new Error("Files is empty");
        }

        const formData = new FormData();

        formData.append("file", files);

        formData.append("upload_preset", "menuropang");

        const URL = "https://api.cloudinary.com/v1_1/wpmenuimage/image/upload";

        const data = await fetch(URL, {
            method: "POST",
            body: formData,
        }).then((res) => res.json());

        setImageURLChild(data.secure_url);
        setImageURL(data.secure_url);
    };

    return (
        <form className="flex flex-col mb-6">
            <div
                {...getRootProps({
                    className: className,
                })}
            >
                <label htmlFor="image">Image</label>
                <input id="image" {...getInputProps()} />
                {files || imageURL ? (
                    //Preview Image
                    <div className="flex justify-center flex-col items-center">
                        <div className="border-2 border-gray-300 border-dashed rounded-lg cursor-pointer w-full h-fit p-5">
                            {imageURL ? (
                                <Image
                                    src={imageURL}
                                    alt="Food Image"
                                    width={250}
                                    height={250}
                                    className="object-cover rounded"
                                />
                            ) : (
                                <Image
                                    src={files.preview}
                                    alt={files.name}
                                    width={250}
                                    height={250}
                                    onLoad={() => {
                                        URL.revokeObjectURL(files.preview);
                                    }}
                                    className="object-cover rounded"
                                />
                            )}
                        </div>
                        <p className="my-3 text-xs text-gray-500 dark:text-gray-400 flex justify-center">
                            Click or Drag n Drop to upload different picture
                        </p>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 w-full h-[19rem]">
                        <div>
                            <svg
                                aria-hidden="true"
                                className="w-full h-10 mb-3 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                ></path>
                            </svg>
                        </div>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 flex justify-center">
                            <span className="font-semibold">
                                Click to upload
                            </span>{" "}
                            or drag n drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF (MAX. 800x400px) | coo
                        </p>
                    </div>
                )}
            </div>
            <input id="dropzone-file" type="file" className="hidden" />

            <div className="flex gap-2 items-center mt-2">
                <Button
                    type="submit"
                    className="max-w-xs content-center w-[19rem]"
                    isLoading={isLoading}
                    onClick={(e) => {
                        e.preventDefault();

                        setIsLoading(true);

                        if (!files) {
                            toast({
                                title: "Upload Photo Error",
                                message: "Photo is null",
                                type: "error",
                            });

                            setIsLoading(false);
                        } else {
                            handleSubmit(files);

                            setTimeout(() => {
                                toast({
                                    title: "Photo Saved",
                                    message: "Photo is uploaded",
                                    type: "success",
                                });

                                setIsLoading(false);
                            }, 1500);
                        }
                    }}
                >
                    Upload Picture
                </Button>

                <Input
                    className="w-full"
                    readOnly
                    value={imageURL ?? "*Upload Image first"}
                />
                <button
                    disabled={!imageURL}
                    className="border border-slate-300 h-full px-4 rounded-md disabled:bg-gray-500"
                    onClick={(e) => {
                        e.preventDefault();

                        // navigator.clipboard.writeText(imageURL);

                        window.open(imageURL, "_blank");

                        toast({
                            title: "Copied",
                            message: "Image URL copied to clipboard",
                            type: "success",
                        });
                    }}
                >
                    <Icons.ExternalLink
                        size={15}
                        color={`${!imageURL ? "white" : "black"}`}
                    />
                </button>
            </div>
        </form>
    );
};

export default UploadImage;
