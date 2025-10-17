import React from "react";

export const Footer = () => {
    return (
        <main className="bg-white flex flex-col">
            <section className="flex justify-between">
                <div>4sduhfskjfdhsjk</div>
                <div className="flex justify-between px-10 mx-10">
                    <ul className="flex-col px-10">
                        <div>
                            <h1 className="text-xl font-semibold">Product</h1>
                            <li>Helath insurance</li>
                            <li>Term isurance</li>
                        </div>
                        <div>
                            <h1 className="text-xl font-semibold">Article</h1>
                            <li>new insurance</li>
                            <li>old insiurance</li>
                        </div>
                    </ul>
                    <ul className="px-10">2</ul>
                    <ul>
                        <div className="px-10">3sec1</div>
                        <div className="px-10">3sec2</div>
                    </ul>
                    <ul>4</ul>
                </div>
            </section>
            <section className="flex justify-equaly mx-8">
                <ul>
                  <li className="text-gray-500 pb-10 textsm">Finshots © 2021-2025. All Rights Reserved.</li>
                  <li className="text-gray-500 text-sm">Tacterial Consulting Private Limited</li>
                  <li className="text-gray-500 text-sm">CIN: U74999KA2018PTC184423</li>
                  <li className="text-gray-500 text-sm">IRDAI Registered Corporate Agent (Composite) License No CA0738</li>
                  <li className="text-gray-500 text-sm">valid till 9th December 2026</li>
                </ul>
                <div>
                    <p className="text-sm max-w-[700px]">Disclaimer : The information contained in this website is presented purely for information purposes only provided as service to the internet community at large. It does not constitute insurance advice and we do not guarantee the accuracy, adequacy or the completeness of the information contained here.</p>
                </div>
            </section>
        </main>
    );
}