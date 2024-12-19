import HeroSection from "@/components/hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "@/data/landing";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-40">
      <HeroSection />

      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((data, index) => {
              return (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {data.value}
                  </div>
                  <div className="text-gray-600">{data.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 ">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything you need to manage your finances
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((data, index) => {
              return (
                <Card key={index} className="p-6">
                  <CardContent className="space-y-4 pt-4">
                    {data.icon}
                    <h3 className="text-xl font-semibold">{data.title}</h3>
                    <p className="text-gray-600">{data.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 ">
          <h2 className="text-3xl font-bold text-center mb-16">How it works</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {howItWorksData.map((data, index) => {
              return (
                <div key={index} className="text-center">
                  <div className="size-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    {data.icon}
                  </div>

                  <h3 className="text-xl font-semibold mb-4">{data.title}</h3>
                  <p className="text-gray-600">{data.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 ">
          <h2 className="text-3xl font-bold text-center mb-12">
            What our user say
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonialsData.map((data, index) => {
              return (
                <Card key={index} className="p-6">
                  <CardContent className="space-y-4 pt-4">
                    <div className="flex item-center mb-4">
                      <Image
                        src={data.image}
                        width={40}
                        height={40}
                        className="rounded-full"
                        alt="Random User Image"
                      />
                      <div className="ml-4">
                        <div className="font-semibold">{data.name}</div>
                        <div className="text-sm text-gray-600 ">
                          {data.role}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{data.quote}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to take control of your finances?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already managing their finances
            smarter with Welth
          </p>
          <Link href={"/dashboard"}>
            <Button
              variant="outline"
              className="animate-bounce text-blue-600 hover:bg-blue-50"
            >
              Start free trail
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
