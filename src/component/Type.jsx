import Typewriter from "typewriter-effect";
export default function Type() {
    return (
        <Typewriter
            options={{
                strings: ['UI UX DESIGN', 'DIGITAL MARKETING',"WEB DEVELOPMENT","MOBILE APP DEVELOPMENT"], 
                autoStart: true,
                loop: true,
            }}
        />
    )
}