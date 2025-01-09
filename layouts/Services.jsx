import React from 'react';
import { motion } from 'framer-motion';
import ContentRenderer from '@/components/ContentRenderer';
import Reveal from '@/components/Reveal';
import Icon from '@/components/Icon';

const Services01 = ({ main = {}, services = [] }) => (
  <div className="mx-auto my-auto p-3 md:p-6 lg:p-12">
    <div className="flex flex-col items-center">
      <div className="grid gap-4 md:grid-cols-3 md:gap-12">
        <div className="col-span-1 row-span-2 mb-6 md:m-0">
          <Reveal animation="fade-in slide-in-right" className="prose prose-invert" delay={200}>
            <ContentRenderer source={main} />
          </Reveal>
        </div>
        {services?.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: i * 0.2, duration: 0.5, type: 'spring', stiffness: 100 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)' }}
            className="prose relative overflow-hidden rounded-lg bg-white shadow-lg"
          >
            {/* Glowing Border Effect */}
            <motion.div
              className="absolute inset-0 rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileHover={{ opacity: 1, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              style={{
                background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(59,130,246,0) 70%)',
                zIndex: -1,
              }}
            />

            {/* Particle Effect */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {[...Array(10)].map((_, index) => (
                <motion.div
                  key={index}
                  className="absolute h-2 w-2 rounded-full bg-blue-500"
                  initial={{ x: Math.random() * 100 - 50, y: Math.random() * 100 - 50, scale: 0 }}
                  whileHover={{
                    x: Math.random() * 100 - 50,
                    y: Math.random() * 100 - 50,
                    scale: 1,
                    transition: { duration: 1, repeat: Infinity, repeatType: 'mirror' },
                  }}
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </motion.div>

            {/* Gradient Header with Icon */}
            <motion.div
              className="relative flex flex-col items-center bg-gradient-to-br from-alpha-100 via-alpha to-beta p-8"
              whileHover={{ background: 'linear-gradient(45deg, #6EE7B7, #3B82F6)' }}
              transition={{ duration: 0.5 }}
            >
              {item.icon && (
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Icon {...item.icon} className="relative z-10 mb-6 h-12 w-12 fill-accent" />
                </motion.div>
              )}
              <motion.h4
                className="relative z-10 m-0 text-white"
                whileHover={{ scale: 1.1, color: '#3B82F6' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {item.title}
              </motion.h4>
            </motion.div>

            {/* Content Section */}
            <motion.div
              className="p-8 pt-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.2 + 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ContentRenderer source={item} />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default Services01;