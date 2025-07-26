import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
	"./static/img/hiking/2025/croatia-walk-on-mars/IMG_2400.jpg",
	"./static/img/hiking/2025/croatia-walk-on-mars/2025_07_19_06_40_IMG_2061.JPG",
	"./static/img/hiking/2025/croatia-walk-on-mars/2025_07_19_06_46_IMG_2062.JPG",
	"./static/img/hiking/2025/croatia-walk-on-mars/2025_07_19_06_51_IMG_2064.JPG",
	"./static/img/hiking/2025/croatia-walk-on-mars/2025_07_19_06_59_IMG_2069.JPG",
	"./static/img/hiking/2025/croatia-walk-on-mars/2025_07_19_07_00_IMG_2070.JPG",
	"./static/img/hiking/2025/croatia-walk-on-mars/2025_07_19_07_05_IMG_2071.JPG",
	"./static/img/hiking/2025/croatia-walk-on-mars/2025_07_19_07_20_IMG_2075.JPG",
	"./static/img/hiking/2025/croatia-walk-on-mars/2025_07_19_07_21_IMG_2077.JPG",
	"./static/img/hiking/2025/croatia-walk-on-mars/2025_07_19_07_22_IMG_2078.JPG",
	"./static/img/hiking/2025/croatia-walk-on-mars/2025_07_19_07_22_IMG_2079.JPG",
	"./static/img/hiking/2025/croatia-walk-on-mars/2025_07_19_07_41_IMG_2087.JPG",
	"./static/img/hiking/2025/croatia-walk-on-mars/2025_07_19_07_47_IMG_2089.JPG",
	"./static/img/hiking/2025/croatia-walk-on-mars/2025_07_19_08_03_IMG_2093.JPG",
	"./static/img/hiking/2025/croatia-walk-on-mars/2025_07_19_08_12_IMG_2095.JPG",
	"./static/img/hiking/2025/croatia-walk-on-mars/2025_07_19_09_03_IMG_2102.JPG",
	"./static/img/hiking/2025/croatia-walk-on-mars/2025_07_19_09_23_IMG_2103.JPG",
	"./static/img/hiking/2025/croatia-walk-on-mars/2025_07_19_11_09_IMG_2119.JPG",
	"./static/img/hiking/2025/croatia-walk-on-mars/2025_07_19_11_13_IMG_2121.JPG",
	"./static/img/hiking/2025/croatia-walk-on-mars/2025_07_19_12_03_IMG_2125.JPG",
	"./static/img/hiking/2025/croatia-walk-on-mars/2025_07_19_12_24_IMG_2138.JPG",
	"./static/img/hiking/2025/croatia-walk-on-mars/2025_07_19_12_42_IMG_2153.PNG",
	"./static/img/hiking/2025/croatia-walk-on-mars/2025_07_19_12_45_IMG_2158.PNG",
	"./static/img/hiking/2025/croatia-walk-on-mars/2025_07_19_12_47_IMG_2168.PNG",
];

const VIDEOS = [];

const SpecificItem = () => {
	return (
		<PhotoAndVideoSection
			photos={PHOTOS}
			videos={VIDEOS}
			altForPhotos={"photo of nature"}
			id={"hiking-2025-croatia-walk-on-mars"}
			title={"Walk on Mars in Novalja, Croatia"}
			extraDetails={[
				{ label: "Length: 13.92km" },
				{ label: "Elev. gain: 470m" },
				{ label: "Moving time: 3h 10m" },
				{
					label:
						"Description: A unique hike through the Mars-like landscapes near Novalja, Croatia. The trail features rocky terrain, panoramic views, and a moderate elevation gain, making it suitable for most hikers.",
				},
			]}
		/>
	);
};

export default SpecificItem;
