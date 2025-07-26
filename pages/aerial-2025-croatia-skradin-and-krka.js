import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
	"./static/img/aerial/2025/croatia-skradin-and-krka/2025_07_18_18_41_IMG_2331.JPG",
	"./static/img/aerial/2025/croatia-skradin-and-krka/2025_07_21_04_38_IMG_2355.JPG",
	"./static/img/aerial/2025/croatia-skradin-and-krka/2025_07_21_04_34_IMG_2361.JPG",
	"./static/img/aerial/2025/croatia-skradin-and-krka/2025_07_21_04_37_IMG_2393.JPG",
	"./static/img/aerial/2025/croatia-skradin-and-krka/2025_07_21_04_45_IMG_2351.JPG",
	"./static/img/aerial/2025/croatia-skradin-and-krka/2025_07_21_04_35_IMG_2360.JPG",
	"./static/img/aerial/2025/croatia-skradin-and-krka/2025_07_21_04_33_IMG_2363.JPG",
];

const VIDEOS = [
	"./static/img/aerial/2025/croatia-skradin-and-krka/2025_07_25_21_49_IMG_2328.MOV",
];

const SpecificItem = () => {
	return (
		<PhotoAndVideoSection
			photos={PHOTOS}
			videos={VIDEOS}
			altForPhotos={
				"aerial photo of Croatia, Skradin and Krka National Park"
			}
			id={"aerial-2025-croatia-skradin-and-krka"}
			title={"Skradin and Krka, Croatia, 2025"}
			description={
				"Aerial photography of the breathtaking landscapes of Skradin and Krka National Park in Croatia, showcasing lush greenery, and the serene beauty of the region."
			}
			location={"Skradin, Krka National Park, Croatia"}
			cameraDetails={"DJI Mavic Pro 1, 4K resolution"}
			tags={[
				"Aerial Photography",
				"Croatia",
				"Skradin",
				"Krka",
				"Landscape Photography",
				"DJI Mavic Pro 1",
			]}
			additionalInfo={
				"Explore the stunning aerial views of Skradin and Krka National Park, Croatia, captured in July 2025. These images highlight the lush greenery, serene waters, and the unique landscapes of this beautiful region."
			}
		/>
	);
};
export default SpecificItem;
