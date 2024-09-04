import { IconType } from "react-icons"
import { GiPlatform } from "react-icons/gi"
import { HiMiniClipboardDocumentList } from "react-icons/hi2"
import { MdSensors } from "react-icons/md"
import { useMediaQuery } from 'react-responsive'

interface FeautureItem {
    id: number
    title: string
    description: string
    icon: IconType
}

export default function Features() {
    const isXs = useMediaQuery({
        query: '(min-width: 480)'
      })
    const features: FeautureItem[] = [
        {
            id: 1,
            title: 'Easy-to-use platform',
            description: 'Data from scouting, weather, satellites and sensors comes together on one platform for a complete overview of your fields.',
            icon: GiPlatform
        },
        {
            id: 2,
            title: 'Affordable in-field sensors',
            description: 'Eight times more affordable than competitors, allowing mass deployment for more and accurate information',
            icon: MdSensors 
        },
        {
            id: 3,
            title: 'Effortless API integration',
            description: 'The API easily connects our data and your existing systems for a smooth and easy data transfer process',
            icon: HiMiniClipboardDocumentList 
        }
    ]
    return (
        <section id="features" className="bg-white shadow-inner shadow-600 ">
            <div className="w-[90%] mx-auto container flex flex-col items-center  gap-y-10 py-10 xs:py-16 sm:py-20 ">
                    <h5 className="uppercase text-2xl xs:text-3xl sm:text-4xl font-black tracking-wider font-montserrat text-center gradient-text mr-5">Prominent features</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 h-auto">
                        
                        {features.map((feature: FeautureItem) => (
                            <div className="bg-900 text-400 p-4 xs:p-10 flex flex-col gap-y-2  xs:gap-y-4 rounded items-center text-center h-auto">
                                <span className="rounded-full flex items-center justify-center xs:w-20 xs:h-20 w-16 h-16 bg-100"><feature.icon size={isXs ? 50 : 40}/></span>
                                <h4 className=" font-semibold text-500 text-xl xs:text-2xl">{feature.title}</h4>
                                <p className="text-lg xs:text-xl">{feature.description}</p>
                            </div>
                        ))}
                    </div>
            </div>

        </section>
    )
}