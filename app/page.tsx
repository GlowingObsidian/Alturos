import circle from "@/app/public/circle.png";
import pattern from "@/app/public/pattern.png";
import step1 from "@/app/public/step1.gif";
import step2 from "@/app/public/step2.gif";
import step3 from "@/app/public/step3.gif";
import strikethrough from "@/app/public/strikethrough.png";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { Nanum_Pen_Script } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Header from "./(components)/Header";
import Logo from "./(components)/Logo";
import { useAuth } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

const handwriting = Nanum_Pen_Script({ subsets: ["latin"], weight: "400" });

const steps = [
  { title: "Step 1", gif: step1 },
  { title: "Step 2", gif: step2 },
  { title: "Step 3", gif: step3 },
];

function page() {
  const { userId } = auth();

  return (
    <div>
      <header className="backdrop-blur-sm border-b sticky top-0 z-20 flex justify-between items-center p-2">
        <Logo width={120} />
        {userId ? (
          <Button variant="outline" asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
        ) : (
          <Button variant="outline" asChild>
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        )}
      </header>
      <section className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src={pattern}
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />

        {/* Gradient Overlay for bottom fade */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"
          aria-hidden="true"
        />

        {/* Content */}
        <div className="space-y-2 text-4xl md:text-6xl lg:text-7xl font-bold text-center max-w-[30rem] sm:max-w-[40rem] lg:max-w-[50rem] p-2 z-10">
          <div>
            Create forms in{" "}
            <span className="relative inline-block">
              minutes
              <Image
                src={strikethrough}
                alt="strikethough"
                className="block absolute top-[-50px] md:top-[-85px] lg:top-[-105px]"
              />
            </span>{" "}
            <span className="text-primary">seconds</span>.
          </div>
          <p className="text-sm md:text-xl font-normal text-gray-400">
            Create and share your form right away with Alturos. Get responses
            and beautiful analytics in the app.
          </p>
          <Button size="lg" asChild>
            <Link href="/dashboard">Generate Form!</Link>
          </Button>
        </div>
      </section>
      <section
        className={
          "text-xl p-2 md:text-4xl text-center font-bold space-y-3 md:space-y-5 " +
          handwriting.className
        }
      >
        <p>But how?</p>
        <p>
          Easy. Using
          <span className="relative inline-block w-[55px] md:w-[100px] font-extrabold text-green-500">
            AI
            <Image
              src={circle}
              alt="strikethough"
              className="block absolute top-[-12px] right-[-3px] md:top-[-30px] md:right-[-6px]"
            />
          </span>
        </p>
        <p>The great new buzz in town!</p>
      </section>
      <p className="text-2xl md:text-4xl font-bold text-center mt-14">
        1-2-3. It{"'s"} that{" "}
        <span className={"text-primary " + handwriting.className}>Simple!</span>
      </p>
      <div className="flex w-full flex-wrap gap-x-5 gap-y-5 justify-evenly my-10 p-5 ">
        {steps.map((step) => (
          <Card key={step.title} className="max-w-sm">
            <CardHeader
              className={
                "text-center text-3xl font-bold " + handwriting.className
              }
            >
              {step.title}
            </CardHeader>
            <CardDescription className="p-6">
              <Image
                src={step.gif}
                alt=""
                className="object-contain rounded-sm border"
              />
            </CardDescription>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default page;
