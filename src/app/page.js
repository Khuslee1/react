import Image from "next/image";
const sold = [
  {
    img: "/image1.jpg",
    name: "Michael Chen",
    occ: "Senior Real Estate Agent",
    sold: 24,
  },
  {
    img: "/image2.jpg",
    name: "David Martinez",
    occ: "Property Specialist",
    sold: 18,
  },
  {
    img: "/image3.jpg",
    name: "James Wilson",
    occ: "Investment Advisor",
    sold: 32,
  },
  {
    img: "/image4.jpg",
    name: "Robert Thompson",
    occ: "Luxury Home Expert",
    sold: 28,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-[107px] items-center">
      <div className="h-[590px] w-screen flex flex-col gap-10 py-16 px-16 bg-white items-center">
        <div className="h-28 w-full flex flex-col gap-4 items-center">
          <div className="flex flex-col items-center">
            <h1 className="font-sans font-medium text-2xl">Smart Tools</h1>
            <h1 className="font-sans font-medium text-2xl">
              Real Experts, Easy Moves
            </h1>
          </div>
          <p className="font-sans font-normal text-base text-[#4A5565]">
            Your journey to finding the perfect home starts here
          </p>
        </div>
        <div className="flex gap-6 h-[234px] w-full">
          <div className="h-full w-1/3 rounded-[14px] border border-[#0000001A] flex items-center gap-9 p-[25px] flex-col">
            <div className="h-12 w-12 rounded-full bg-[#FFEDD4] flex justify-center items-center">
              <img className="h-6 w-6" src="/Icon1.png" />
            </div>
            <p className="font-sans text-4 font-normal">Top-end Curation</p>
            <p className="font-sans text-[14px] font-normal text-[#4A5565] text-center">
              Carefully selected properties that meet our high standards of
              quality
            </p>
          </div>
          <div className="h-full w-1/3 rounded-[14px] border border-[#0000001A] flex items-center gap-9 p-[25px] flex-col">
            <div className="h-12 w-12 rounded-full bg-[#FFEDD4] flex justify-center items-center">
              <img className="h-6 w-6" src="/Icon2.png" />
            </div>
            <p className="font-sans text-4 font-normal">Personalized Insight</p>
            <p className="font-sans text-[14px] font-normal text-[#4A5565] text-center">
              Expert guidance tailored to your unique needs and preferences
            </p>
          </div>
          <div className="h-full w-1/3 rounded-[14px] border border-[#0000001A] flex items-center gap-9 p-[25px] flex-col">
            <div className="h-12 w-12 rounded-full bg-[#FFEDD4]  flex justify-center items-center">
              <img className="h-6 w-6" src="/Icon3.png" />
            </div>
            <p className="font-sans text-4 font-normal">Transaction Moving</p>
            <p className="font-sans text-[14px] font-normal text-[#4A5565] text-center">
              Streamlined process from viewing to closing with dedicated
              supports
            </p>
          </div>
        </div>
        <div className="bg-[#FF6900] flex justify-center items-center rounded-lg text-white h-9 w-[140.34px]">
          Get Started
        </div>
      </div>
      <div className="bg-[#F9FAFB] w-screen h-[474px] flex flex-col gap-12 p-10">
        <div className="h-28 w-full flex flex-col gap-4 items-center">
          <div className="flex flex-col items-center">
            <h1 className="font-sans font-medium text-xl">
              Buying Doesn't Have to
            </h1>
            <h1 className="font-sans font-medium text-xl">Be Overwhelming</h1>
          </div>
          <p className="font-sans font-normal text-base text-[#4A5565]">
            Our streamlined process makes finding your dream home simple and
            stress-free
          </p>
        </div>
        <div className="w-fill h-[246px] flex gap-8 flex-wrap flex-row justify-center">
          <div className="w-[624px] h-[107px] px-5 flex gap-8">
            <div className="h-10 w-10 rounded-full flex justify-center items-center border-2 border-[#FF6900] text-[#FF6900]">
              1
            </div>
            <div className="h-28 w-lg flex flex-col gap-4 ">
              <h1 className="font-sans font-medium text-lg">
                Browse Curated Homes
              </h1>
              <p className="font-sans font-normal text-base text-[#4A5565]">
                Explore our carefully selected collection of properties that
                match your lifestyle and budget. Every listing is verified and
                includes detailed information.
              </p>
            </div>
          </div>
          <div className="w-[624px] h-[107px] px-5 flex gap-8">
            <div className="h-10 w-10 rounded-full flex justify-center items-center border-2 border-[#FF6900] text-[#FF6900]">
              3
            </div>
            <div className="h-28 w-lg flex flex-col gap-4 ">
              <h1 className="font-sans font-medium text-lg">
                Get Expert Advice
              </h1>
              <p className="font-sans font-normal text-base text-[#4A5565]">
                Connect with experienced agents who understand the market and
                can guide you through every step of your home-buying journey.
              </p>
            </div>
          </div>
          <div className="w-[624px] h-[107px] px-5 flex gap-8">
            <div className="h-10 w-10 rounded-full flex justify-center items-center border-2 border-[#FF6900] text-[#FF6900]">
              2
            </div>
            <div className="h-28 w-lg flex flex-col gap-4 ">
              <h1 className="font-sans font-medium text-lg">Build a Tour</h1>
              <p className="font-sans font-normal text-base text-[#4A5565]">
                Schedule viewings at your convenience and visit multiple
                properties in one trip. Our team coordinates everything to save
                you time.
              </p>
            </div>
          </div>
          <div className="w-[624px] h-[107px] px-5 flex gap-8">
            <div className="h-10 w-10 rounded-full flex justify-center items-center border-2 border-[#FF6900] text-[#FF6900]">
              4
            </div>
            <div className="h-28 w-lg flex flex-col gap-4 ">
              <h1 className="font-sans font-medium text-lg">Offer & Close</h1>
              <p className="font-sans font-normal text-base text-[#4A5565]">
                Make confident offers with our support and navigate the closing
                process smoothly. We handle the paperwork so you can focus on
                moving in.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen h-[972px] flex flex-col gap-10 px-20 items-center">
        <div className="w-full flex flex-col gap-8 items-center">
          <p className="font-sans text-base text-[#0A0A0A] font-normal">
            Explore Properties
          </p>
          <div className="flex h-9 w-full justify-center gap-2">
            <div className="py-2 px-6 text-sm font-sans rounded-full bg-[#FF6900] text-[white]">
              House
            </div>
            <div className="py-2 px-6 text-sm font-sans rounded-full border border-[#0000001A]">
              Villa
            </div>
            <div className="py-2 px-6 text-sm font-sans rounded-full border border-[#0000001A]">
              Apartment
            </div>
          </div>
        </div>
        <div className="w-full h-[764px] flex flex-wrap gap-7 justify-center ">
          <div className="flex flex-col gap-6 w-102 h-[370px] rounded-[14px] border border-[#0000001A] relative">
            <img
              className="w-full h-48 object-cover rounded-t-[14px]"
              src="/img1.jpg"
            />
            <div className="relative w-[406px] h-[152px]">
              <div className="text-[#FF6900] text-base font-sans absolute top-4 left-4">
                $216,000
              </div>
              <p className="absolute top-13 left-4 font-sans text-base">
                Piney Hills
              </p>
              <div className="absolute top-22 left-4 flex gap-1 items-center">
                <img className="h-4 w-4" src="/bed.png" />
                <p className="text-[#4A5565] text-[14px] font-sans">
                  4 Bedrooms
                </p>
              </div>
              <div className="absolute left-4 top-29 flex gap-1">
                <div className="flex gap-1 items-center">
                  <img className="h-4 w-4" src="/shower.png" />
                  <p className="text-[#4A5565] text-[14px] font-sans">
                    2 Bathrooms
                  </p>
                </div>
                <div className="flex gap-1 items-center">
                  <img className="h-4 w-4" src="/sq.png" />
                  <p className="text-[#4A5565] text-[14px] font-sans">
                    2,157 sqft
                  </p>
                </div>
              </div>
            </div>
            <p className="absolute bg-[#FF6900] text-[white] text-[12px] font-sans top-4 left-4 rounded-lg px-2 py-0.5">
              POPULAR
            </p>
          </div>
          <div className="flex flex-col gap-6 w-102 h-[370px] rounded-[14px] border border-[#0000001A]">
            <img
              className="w-full h-48 object-cover rounded-t-[14px]"
              src="/img2.jpg"
            />
            <div className="relative w-[406px] h-[152px]">
              <div className="text-[#FF6900] text-base font-sans absolute top-4 left-4">
                $450,000
              </div>
              <p className="absolute top-13 left-4 font-sans text-base">
                River Oak
              </p>
              <div className="absolute top-22 left-4 flex gap-1 items-center">
                <img className="h-4 w-4" src="/bed.png" />
                <p className="text-[#4A5565] text-[14px] font-sans">
                  2 Bedrooms
                </p>
              </div>
              <div className="absolute left-4 top-29 flex gap-1">
                <div className="flex gap-1 items-center">
                  <img className="h-4 w-4" src="/shower.png" />
                  <p className="text-[#4A5565] text-[14px] font-sans">
                    2 Bathrooms
                  </p>
                </div>
                <div className="flex gap-1 items-center">
                  <img className="h-4 w-4" src="/sq.png" />
                  <p className="text-[#4A5565] text-[14px] font-sans">
                    1800 sqft
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-102 h-[370px] rounded-[14px] border border-[#0000001A] relative">
            <img
              className="w-full h-48 object-cover rounded-t-[14px]"
              src="/img3.jpg"
            />
            <div className="relative w-[406px] h-[152px]">
              <div className="text-[#FF6900] text-base font-sans absolute top-4 left-4">
                $318,000
              </div>
              <p className="absolute top-13 left-4 font-sans text-base">
                Maple Glen
              </p>
              <div className="absolute top-22 left-4 flex gap-1 items-center">
                <img className="h-4 w-4" src="/bed.png" />
                <p className="text-[#4A5565] text-[14px] font-sans">
                  5 Bedrooms
                </p>
              </div>
              <div className="absolute left-4 top-29 flex gap-1">
                <div className="flex gap-1 items-center">
                  <img className="h-4 w-4" src="/shower.png" />
                  <p className="text-[#4A5565] text-[14px] font-sans">
                    3 Bathrooms
                  </p>
                </div>
                <div className="flex gap-1 items-center">
                  <img className="h-4 w-4" src="/sq.png" />
                  <p className="text-[#4A5565] text-[14px] font-sans">
                    2,850 sqft
                  </p>
                </div>
              </div>
            </div>
            <p className="absolute bg-[#FF6900] text-[white] text-[12px] font-sans top-4 left-4 rounded-lg px-2 py-0.5">
              NEW LISTING
            </p>
          </div>
          <div className="flex flex-col gap-6 w-102 h-[370px] rounded-[14px] border border-[#0000001A]">
            <img
              className="w-full h-48 object-cover rounded-t-[14px]"
              src="/img4.jpg"
            />
            <div className="relative w-[406px] h-[152px]">
              <div className="text-[#FF6900] text-base font-sans absolute top-4 left-4">
                $325,000
              </div>
              <p className="absolute top-13 left-4 font-sans text-base">
                Forest Hill
              </p>
              <div className="absolute top-22 left-4 flex gap-1 items-center">
                <img className="h-4 w-4" src="/bed.png" />
                <p className="text-[#4A5565] text-[14px] font-sans">
                  4 Bedrooms
                </p>
              </div>
              <div className="absolute left-4 top-29 flex gap-1">
                <div className="flex gap-1 items-center">
                  <img className="h-4 w-4" src="/shower.png" />
                  <p className="text-[#4A5565] text-[14px] font-sans">
                    2 Bathrooms
                  </p>
                </div>
                <div className="flex gap-1 items-center">
                  <img className="h-4 w-4" src="/sq.png" />
                  <p className="text-[#4A5565] text-[14px] font-sans">
                    2,200 sqft
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-102 h-[370px] rounded-[14px] border border-[#0000001A]">
            <img
              className="w-full h-48 object-cover rounded-t-[14px]"
              src="/img5.jpg"
            />
            <div className="relative w-[406px] h-[152px]">
              <div className="text-[#FF6900] text-base font-sans absolute top-4 left-4">
                $295,000
              </div>
              <p className="absolute top-13 left-4 font-sans text-base">
                Cedar Park
              </p>
              <div className="absolute top-22 left-4 flex gap-1 items-center">
                <img className="h-4 w-4" src="/bed.png" />
                <p className="text-[#4A5565] text-[14px] font-sans">
                  3 Bedrooms
                </p>
              </div>
              <div className="absolute left-4 top-29 flex gap-1">
                <div className="flex gap-1 items-center">
                  <img className="h-4 w-4" src="/shower.png" />
                  <p className="text-[#4A5565] text-[14px] font-sans">
                    2 Bathrooms
                  </p>
                </div>
                <div className="flex gap-1 items-center">
                  <img className="h-4 w-4" src="/sq.png" />
                  <p className="text-[#4A5565] text-[14px] font-sans">
                    1650 sqft
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-102 h-[370px] rounded-[14px] border border-[#0000001A]">
            <img
              className="w-full h-48 object-cover rounded-t-[14px] border border-[#0000001A]"
              src="/img6.jpg"
            />
            <div className="relative w-[406px] h-[152px]">
              <div className="text-[#FF6900] text-base font-sans absolute top-4 left-4">
                $425,000
              </div>
              <p className="absolute top-13 left-4 font-sans text-base">
                Willow Greek
              </p>
              <div className="absolute top-22 left-4 flex gap-1 items-center">
                <img className="h-4 w-4" src="/bed.png" />
                <p className="text-[#4A5565] text-[14px] font-sans">
                  4 Bedrooms
                </p>
              </div>
              <div className="absolute left-4 top-29 flex gap-1">
                <div className="flex gap-1 items-center">
                  <img className="h-4 w-4" src="/shower.png" />
                  <p className="text-[#4A5565] text-[14px] font-sans">
                    3 Bathrooms
                  </p>
                </div>
                <div className="flex gap-1 items-center">
                  <img className="h-4 w-4" src="/sq.png" />
                  <p className="text-[#4A5565] text-[14px] font-sans">
                    2,650 sqft
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#FF6900] flex justify-center items-center rounded-lg text-white h-9 w-[188.88px] ">
          Load More Listing
        </div>
      </div>
      <div className="w-full h-[686px] p-10 bg-[#F9FAFB] flex flex-col items-center gap-10 ">
        <div className="h-28 w-full flex flex-col gap-4 items-center">
          <div className="flex flex-col items-center">
            <h1 className="font-sans font-medium text-xl">Meet the People</h1>
            <h1 className="font-sans font-medium text-xl">
              Behind the Process
            </h1>
          </div>
          <p className="font-sans font-normal text-base text-[#4A5565]">
            Our experienced team is dedicated to helping you find your perfect
            home
          </p>
        </div>
        <div className="w-full h-390px flex gap-6 justify-center">
          {sold.map((item, index) => {
            return (
              <div
                key={index}
                className="w-[302px] h-[390px] border border-[#0000001A] rounded-[14px] flex flex-col gap-6"
              >
                <img
                  className="rounded-t-[14px] object-cover h-64 w-full"
                  src={item.img}
                />
                <div className="flex flex-col gap-1 px-4 pt-4 items-center">
                  <h1 className="font-sans text-base">{item.name}</h1>
                  <p className="font-sans text-[14px] text-[#4A5565]">
                    {item.occ}
                  </p>
                  <p className="font-sans text-[14px] text-[#FF6900]">
                    {item.sold} Properties Sold
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="bg-[#FF6900] flex justify-center items-center rounded-lg text-white h-9 w-[161.73px] ">
          Meet the team
        </div>
      </div>
    </div>
  );
}
