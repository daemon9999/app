import About from "@/layouts/home/about";
import Concept from "@/layouts/home/concept";
import Features from "@/layouts/home/features";
import Intro from "@/layouts/home/intro";
import Sources from "@/layouts/home/sources";

export default function Home() {
    return (
        <>
            <Intro/>
            <Concept/>
            <Features/>
            <Sources/>
            <About/>
        </>
    )
}