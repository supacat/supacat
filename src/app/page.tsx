"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

const ANIMATION_DURATION = 0.3;
const SLIDE_DISTANCE = 20;

export default function Page() {
  return (
    <div className="flex flex-col gap-12">
      <motion.section
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: SLIDE_DISTANCE }}
        transition={{ duration: ANIMATION_DURATION }}
      >
        <div className="mb-6">
          <p className="text-foreground leading-relaxed">
            We create software to help people because it's fulfilling and we're
            passionate about it. We believe that's the best reason to do
            anything.
          </p>
        </div>
      </motion.section>
      <motion.section
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: SLIDE_DISTANCE }}
        transition={{ duration: ANIMATION_DURATION, delay: 0.1 }}
      >
        <div className="mb-4">
          <h2 className="font-medium text-foreground text-lg">Projects</h2>
        </div>
        <div className="space-y-1">
          <a
            className={cn(
              "flex items-start gap-3 rounded-2xl transition-colors hover:bg-gray-100 p-4 -mx-4 group"
            )}
            href="https://neeed.directory"
            rel="noopener"
            target="_blank"
          >

            <div className="flex flex-1 flex-col gap-y-1 text-sm">
                  <h3 className="font-medium">
                    Neeed Directory
                  </h3>
                <p className="text-gray-500">The best place to find the best products</p>
            </div>
            <ArrowUpRight className="h-5 w-5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>

          <a
            className={cn(
              "flex items-start gap-3 rounded-2xl transition-colors hover:bg-gray-100 p-4 -mx-4 group"
            )}
            href="https://www.uselockin.app"
            rel="noopener"
            target="_blank"
          >

            <div className="flex flex-1 flex-col gap-y-1 text-sm">
                  <h3 className="font-medium">
                    Lock In
                  </h3>
                <p className="text-gray-500">Track daily habits with lock in challenges and maintain your streaks</p>
            </div>
            <ArrowUpRight className="h-5 w-5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </motion.section>
      <motion.section
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: SLIDE_DISTANCE }}
        transition={{ duration: ANIMATION_DURATION, delay: 0.2 }}
      >
        <div className="mb-4">
          <h2 className="font-medium text-gray-1200 text-lg">More</h2>
        </div>
        <div className="space-y-1">
          <a
            className={cn(
              "flex items-start gap-3 rounded-2xl transition-colors hover:bg-gray-100 p-4 -mx-4 group"
            )}
            href="https://merch.supacat.io"
            rel="noopener"
            target="_blank"
          >

            <div className="flex flex-1 flex-col gap-y-1 text-sm">
                  <h3 className="font-medium">
                    Merch
                  </h3>
                <p className="text-gray-500">
                  Official Supacat merchandise and apparel
                </p>
              </div>
            <ArrowUpRight className="h-5 w-5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            className={cn(
              "flex items-start gap-3 rounded-2xl transition-colors hover:bg-gray-100 p-4 -mx-4 group"
            )}
            href="mailto:julien@supacat.io"
          >

            <div className="flex flex-1 flex-col gap-y-1 text-sm">
                  <h3 className="font-medium">
                    Get in touch
                  </h3>
                <p className="text-gray-500">julien@supacat.io</p>
            </div>
            <ArrowUpRight className="h-5 w-5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </motion.section>
    </div>
  );
}
