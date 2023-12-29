"use client";
import Image from 'next/image'
import styles from './page.module.css'
import { motion, useInView } from "framer-motion";
import { useRef } from 'react';

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);

  const inView = useInView(ref)
  const inView1 = useInView(ref1)
  const inView2 = useInView(ref2)

  return (
    <div className={"content"}>
      <div className={styles["main-content"]}>
        <div className={styles["main-new"]}>
          <p>New: Bot Re-Written in TypeScript</p>
        </div>
        <h1 className={styles["title"]}>Loti, A Multi-Purpose Bot.</h1>
        <p className={styles["description"]}>A very customizable multipurpose bot for welcome image, In-depth logs, Social commands, Moderation and many more ...</p>
        <div className={styles["buttons"]}>
          <a href="https://discord.gg/invite/loti" className={styles["add"]}>Support Server</a>
          <a href="#features" className={styles["browse"]}>Browse Features</a>
        </div>
      </div>

      <div className={styles["trusted-by-section"]}>
        <h2 className={styles["trusted-by-title"]}>Trusted by over <span className={styles["white"]}>50</span> discord servers, including:</h2>
        <div className={styles["server-slider"]}>
          <div className={styles["slider-left"]}></div>
          <div className={styles["slider-content"]}>
            <div className={styles["slider-items"]}>
              <div className={styles["server-item"]}>
                <img src="/raidhub.webp" alt="Server 1" className={styles["server-icon"]} />
                <div className={styles["server-info"]}>
                  <p className={styles["server-name"]}>RaidHub <img src="/discord.svg" alt="S" className={styles["discord-icon"]} /></p>
                  <p className={styles["member-count"]}>1,500 members</p>
                </div>
              </div>
              <div className={styles["server-item"]}>
                <img src="/lowmanhub.gif" alt="Server 2" className={styles["server-icon"]} />
                <div className={styles["server-info"]}>
                  <p className={styles["server-name"]}>Lowman Hub<img src="/discord.svg" alt="S" className={styles["discord-icon"]} /></p>
                  <p className={styles["member-count"]}>1,000 members</p>
                </div>
              </div>
              <div className={styles["server-item"]}>
                <img src="/femboy.webp" alt="Server 3" className={styles["server-icon"]} />
                <div className={styles["server-info"]}>
                  <p className={styles["server-name"]}>femboyclub<img src="/discord.svg" alt="S" className={styles["discord-icon"]} /></p>
                  <p className={styles["member-count"]}>2,800 members</p>
                </div>
              </div>
              <div className={styles["server-item"]}>
                <img src="/cemetery.gif" alt="Server 4" className={styles["server-icon"]} />
                <div className={styles["server-info"]}>
                  <p className={styles["server-name"]}>Cemetery<img src="/discord.svg" alt="S" className={styles["discord-icon"]} /></p>
                  <p className={styles["member-count"]}>2,400 members</p>
                </div>
              </div>
              <div className={styles["server-item"]}>
                <img src="/loti.webp" alt="Server 5" className={styles["server-icon"]} />
                <div className={styles["server-info"]}>
                  <p className={styles["server-name"]}>Loti<img src="/discord.svg" alt="S" className={styles["discord-icon"]} /></p>
                  <p className={styles["member-count"]}>50 members</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["slider-right"]}></div>
        </div>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.5 }}
        id="features"
        className={styles["feature"]}
      >
        <img src="/blank.svg" />
        <div className={styles["feature-information"]}>
          <div className={styles["feature-icon"]}>
            <div className={styles["feature-icon-left"]}>
              <img src="/welcome-icon.png" className={styles["feature-icon-image"]}/>
            </div>
            <span>Welcome Messages</span>
          </div>
            <h1>Let&apos;s Welcome New Members With Style</h1>
            <p>Create your own welcome images, which include the user&apos;s username and avatar, as well as a customizable background image!</p>
          <a href="#learn">Learn More About Welcome & Goodbye</a>
        </div>
      </motion.div>
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 50 }}
        transition={{ duration: 0.5 }}
        id="features"
        className={styles["feature"]}
      >
        <div className={styles["feature-information"]}>
          <div className={styles["feature-icon"]}>
            <div className={styles["feature-icon-left"]}>
              <img src="/welcome-icon.png" className={styles["feature-icon-image"]}/>
            </div>
            <span>Embed Messages</span>
          </div>
          <h1>Easily create embeds for your server!</h1>
            <p>Illustrate your creativity in embeds by using ProBot&apos;s simple customization and sending it to any preferred channel.</p>
            <a href="#learn">Learn More About Embed Messages</a>
        </div>
        <img src="/blank.svg" />
      </motion.div>
      <motion.div
        ref={ref2}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 50 }}
        transition={{ duration: 0.5 }}
        id="features"
        className={styles["feature"]}
      >
        <img src="/blank.svg" />
        <div className={styles["feature-information"]}>
          <div className={styles["feature-icon"]}>
            <div className={styles["feature-icon-left"]}>
              <img src="/welcome-icon.png" className={styles["feature-icon-image"]}/>
            </div>
            <span>Welcome Messages</span>
          </div>
            <h1>Let&apos;s Welcome New Members With Style</h1>
            <p>Create your own welcome images, which include the user&apos;s username and avatar, as well as a customizable background image!</p>
          <a href="#learn">Learn More About Welcome & Goodbye</a>
        </div>
      </motion.div>
    </div>
  )
}
