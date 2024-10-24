"use client"

import { User } from "@prisma/client"
import { useState } from "react"

import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { updateProfile } from "@/lib/actions/user.actions"
import { CldUploadWidget } from "next-cloudinary"

const modalVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
	exit: { opacity: 0 }
}

const UpdateUser = ({ user }: { user: User }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [cover, setCover] = useState<any>()

	const handleClose = (
		e: React.MouseEvent<HTMLDivElement> | React.FormEvent<HTMLFormElement>
	) => {
		setIsOpen(false)
	}

	return (
		<div className="">
			<span
				className="text-blue-500 text-xs cursor-pointer"
				onClick={() => setIsOpen(true)}
			>
				Update
			</span>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						className="fixed w-screen h-screen top-0 left-0 bg-black bg-opacity-80 backdrop-blur-sm overflow-hidden flex items-center justify-center z-50 transition-all duration-300"
						onClick={handleClose}
						variants={modalVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
					>
						<form
							action={formData =>
								updateProfile(formData, cover?.secure_url)
							}
							onSubmit={e => handleClose(e)}
							className="relative p-12 bg-white rounded-lg shadow-md flex flex-col gap-2 w-full md:w-1/2 xl:w-1/3"
							onClick={e => e.stopPropagation()}
						>
							{/* TITLE  */}
							<h1>Update Profile</h1>
							<p className="mt-4 text-xs text-gray-500">
								Use the navbar profile to change the avatar or username.
							</p>
							{/* COVER PICTURE  */}
							<CldUploadWidget
								uploadPreset="next-social"
								onSuccess={result => setCover(result.info)}
							>
								{({ open }) => {
									return (
										<div
											className="flex flex-col gap-4 my-4"
											onClick={() => open()}
										>
											<label htmlFor="">Cover Picture</label>
											<div className="flex items-center gap-2 cursor-pointer">
												<Image
													src={user.cover || "/noCover.png"}
													alt="cover"
													width={48}
													height={48}
													className="w-12 h-8 rounded-md object-cover"
												/>
												<span className="text-xs underline text-gray-600">
													Change
												</span>
											</div>
										</div>
									)
								}}
							</CldUploadWidget>
							{/* INPUT  */}
							<div className="flex flex-wrap justify-between gap-2 xl:gap-4">
								<div className="flex flex-col gap-4">
									<label htmlFor="" className="text-xs text-gray-500">
										First Name
									</label>
									<input
										name="firstName"
										className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
										type="text"
										placeholder={user.firstName || "Jhon"}
									/>
								</div>
								{/* INPUT  */}
								<div className="flex flex-col gap-4">
									<label htmlFor="" className="text-xs text-gray-500">
										Last Name
									</label>
									<input
										name="lastName"
										className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
										type="text"
										placeholder={user.lastName || "Doe"}
									/>
								</div>
								{/* INPUT  */}
								<div className="flex flex-col gap-4">
									<label htmlFor="" className="text-xs text-gray-500">
										Description
									</label>
									<input
										name="description"
										className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
										type="text"
										placeholder={
											user.description || "Life is beautiful..."
										}
									/>
								</div>
								{/* INPUT  */}
								<div className="flex flex-col gap-4">
									<label htmlFor="" className="text-xs text-gray-500">
										City
									</label>
									<input
										name="city"
										className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
										type="text"
										placeholder={user.city || "Stockholm"}
									/>
								</div>
								{/* INPUT  */}
								<div className="flex flex-col gap-4">
									<label htmlFor="" className="text-xs text-gray-500">
										School
									</label>
									<input
										name="school"
										className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
										type="text"
										placeholder={user.school || "MIT"}
									/>
								</div>
								{/* INPUT  */}
								<div className="flex flex-col gap-4">
									<label htmlFor="" className="text-xs text-gray-500">
										Work
									</label>
									<input
										name="work"
										className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
										type="text"
										placeholder={user.work || "Apple"}
									/>
								</div>
								{/* INPUT  */}
								<div className="flex flex-col gap-4">
									<label htmlFor="" className="text-xs text-gray-500">
										Website
									</label>
									<input
										name="website"
										className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
										type="text"
										placeholder={user.website || "antondeulia.dev"}
									/>
								</div>
							</div>
							<button className="bg-blue-500 p-2 mt-2 rounded-md text-white">
								Update
							</button>
							<div
								className="absolute text-xl right-2 top-3 cursor-pointer"
								onClick={handleClose}
							>
								X
							</div>
						</form>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export default UpdateUser
