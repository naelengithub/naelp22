import * as React from "react";

import { CollapsingItem } from "./collapsingItem";

export interface CollapsingProps {
  className?: string;
}

/**
 * @name Collapsing
 * @description Drop down menu bar with expandable content.
 */
export const Collapsing = (props: CollapsingProps) => {
  const { className } = props;

  return (
    <div>
      <CollapsingItem subject="frontend engineering">
        <p>
          Currently learning frontend engineering with React, I started
          wandering on my engineering path in January 2022, when I entered
          Hackademy and The British Council&apos;s bootcamp, Skills for Women in
          Tech. Afterwards I started an internship at Haldi, where I have been
          diving into React and Next.js.
        </p>
      </CollapsingItem>
      <CollapsingItem subject="skin care">
        <p>Have been a skincare consultant for two years,</p>
      </CollapsingItem>
      <CollapsingItem subject="architecture">
        <p>
          After my first three years studying a BA in Architecture at the
          Universidad Nacional Autónoma de México in Mexico City, I decided to
          focus on Urbanism and fulfill the last two years of my studies in
          Berlin, Germany.
        </p>
      </CollapsingItem>
      <CollapsingItem subject="languages">
        <p>
          I speak English and Spanish fluently, and German at an intermediate
          level.
        </p>
      </CollapsingItem>
    </div>
  );
};
