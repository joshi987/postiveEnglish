import React from "react";
import placeholderImage from "../assets/img/boy.png"; // Make sure to replace with the actual path to the placeholder image

const BlogGrid = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "Parent",
      content:
        "As a parent, I'm deeply concerned about my child's increasing inability to focus. He spends hours on his phone, scrolling through social media and watching endless reels. This has significantly impacted his attention span and ability to concentrate on schoolwork. I've tried various methods to reduce his screen time, but nothing seems to work. I'm desperately seeking a solution that can help him regain his focus and enhance his cognitive skills. A tool or game that combines learning with fun would be a perfect fit to address this issue and help him build better mental stamina.",
    },
    {
      name: "Jane Smith",
      role: "Teacher",
      content:
        "My daughter used to be so attentive and curious, but lately, all she wants to do is watch videos on her tablet. Her grades are slipping, and she struggles to stay engaged in any activity that requires concentration. I'm worried about her future and feel helpless watching her lose interest in learning. We need something innovative that can capture her attention in a positive way and help her develop better focus. I'm searching for a solution that not only limits her screen time but also boosts her cognitive development.",
    },
    {
      name: "Alex Johnson",
      role: "Parent",
      content:
        "It's heartbreaking to see my son so engrossed in his phone, neglecting his studies and even social interactions. His once sharp mind now seems dulled by constant exposure to trivial content. I've read about the negative effects of excessive screen time on kids, and I'm desperate for a way to reverse this trend. A game or application that can provide mental stimulation while being enjoyable would be ideal. I hope to find a solution that can help him rebuild his concentration and improve his overall mental health.",
    },
  ];

  return (
    <div className="p-6 relative z-10">
      <h2 className="text-3xl font-bold text-center mb-6">Testimonial</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105 p-4 h-auto" // Adjust height to auto
          >
            <img
              src={placeholderImage}
              alt={testimonial.name}
              className="w-full h-32 object-contain"
            />
            <div className="p-2 text-center">
              <h3 className="text-2xl font-bold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
              <p className="text-sm text-gray-600 mt-2">
                {testimonial.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;
