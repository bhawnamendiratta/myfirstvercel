import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Interview
      </h1>
      <p>
        
          <h2> 1. Ranking Support Tasks</h2>
  {'Most Favourite (Explanations):

Find and recruit teammates for the support team: I like learning about people and aligning them to the projects I am working with. Write and maintain support articles and docs pages: I have enjoyed writing KBs for the internal team and upskilling the team to work with customers. Create video tutorials to help teach users a specific feature or use case: I enjoy teaching users to use products. Work with engineering teams during incidents and provide updates to internal and external stakeholder: I have enjoyed working with engineering teams in my current role this provides ample learning opportunities. Work with the product team to develop a new feature based on feedback from customers: I like talking to customers and understand their pain points and work with engineering to prioritise the features.

Least Fovourite Taks:

Respond to 25+ support requests via email every day: I like doing less work with high quality.: Help resolve billing issues for customers: There should be a dedicated team to work with billing related issues. Respond to queries on Twitter, Reddit, Hacker News and other 3rd party sites. I have never worked to support customers through Social media. Engage multiple users at once in a public discussion, to answer their questions and troubleshoot problems. I have never done this but I would like to explore this also. Work with 3rd party partners to track down a tricky situation for a joint customer. Often this creates a difference of opinion and limited access over 3rd party partners products.

<h2>2.  What do you want to learn or do more of at work?</h2>
I'm eager to learn more about:

Advanced Features of Vercel: Deepening my understanding of serverless functions, edge functions, and other advanced features. Frontend Development: Expanding my knowledge of frameworks like Next.js and React to better understand customer projects. DevOps Practices: Strengthening my ability to automate deployments, testing, and infrastructure management.

<h2>3. Describe how you solved a challenge or technical issue that you faced in a previous role (preferably in a previous support role). How did you determine that your solution was successful?</h2>
I was working as a Support Engineer for a new Product with Salesforce since it was a very new product there was limited understanding of the product with the customers as well as support teams. I used to go on calls with the customers gather their requirements and issues with the product work with the enginnering and product team to resolve the issues and later create a Konwledge base articles for the future Support Engineers.

<h2>4. When would you choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?</h2>
        Edge Functions: Ideal for performance-critical tasks at the network edge, like content filtering or authentication. 
        Serverless Functions: Well-suited for backend logic that doesn't require constant running instances, like API endpoints or database interactions. 
        Edge Middleware: Perfect for modifying requests and responses at the edge, such as adding security headers or rewriting URLs.

<h2>5. Imagine a customer writes in requesting help with a build issue on a framework or technology that you've not seen before. How would you begin troubleshooting this and what questions would you ask the customer to understand the situation better?</h2>

Gather Information: I'd ask the customer: Framework/Technology Name Specific Error Messages Code Snippets (if applicable) Steps to Reproduce the Issue Research and Leverage Resources: I'd research the framework documentation, community forums, and Vercel knowledge base to understand common issues and potential solutions. Isolate the Problem: I'd guide the customer through steps to isolate the problematic code or configuration within the framework. Suggest Workarounds or Next Steps: Based on the findings, I'd recommend workarounds, suggest further troubleshooting based on research, or escalate the issue if necessary.

<h2>6. The customer from question 5 replies to your response with the below:
“I’m so frustrated. I’ve been trying to make this work for hours and I just can’t figure it out. It must be a platform issue so just fix it for me instead of asking me questions.” Please write a follow-up reply to the customer. Empathetic Response:
</h2>
"I understand your frustration. Building can be challenging, especially with new technologies. Let's work together to identify the issue. The information you provide will be crucial in pinpointing the cause. Can you share some details about the error messages you're encountering?"

<h2>7. A customer writes in to the Helpdesk asking "How do I do a redirect from the /blog path to https://example.com?" Please write a reply to the customer. Feel free to add any information about your decision making process after the reply.
</h2>
  Response:

"Absolutely! To redirect from /blog to https://example.com, you can add a rewrite rule to your next.config.js file. Here's an example:

JavaScript module.exports = { rewrites: async () => [ { source: '/blog', destination: 'https://example.com', permanent: true }, ], }

Decision Making:

The rewrite rule approach is efficient for simple redirects within a Next.js project. Vercel also offers other redirect options like custom server configurations for more complex scenarios.

<h2>8. A customer is creating a site and would like their project not to be indexed by search engines. Please write a reply to the customer. Feel free to add any information about your decision making process after the reply.</h2>
There are two ways to prevent search engines from indexing your site:

Robots.txt: Add a robots.txt file to your project root with the following line: User-agent: * Disallow: / This disallows all search engine bots from indexing any pages on your site.

Next.js Head: Include the following meta tag in your _app.js file's Head component: JavaScript

This instructs search engines not to index the content of your pages.

Decision Making:

I presented both options because:

Robots.txt is a widely recognized standard. It's a common approach for controlling search engine indexing. Next.js meta tag offers more granular control. For some sites, you might only want to prevent indexing of specific pages. I recommended including both the robots.txt and the meta tag for a stronger signal to search engines. However, you can choose the approach that best suits your needs.

Additional Considerations:

Temporary vs. Permanent Indexing: If you plan to make your site public in the future, you'll need to remove these restrictions later. Testing and Verification: Use tools like Google Search Console to verify that search engines are respecting your no-indexing instructions.
  <h2>9. What do you think is one of the most common problems which customers ask Vercel for help with? How would you help customers to overcome common problems, short-term and long-term? Common Problems:
</h2>
Deployment Issues: These can include errors during the build process, configuration mistakes, or issues connecting to external services. Custom Domain Setup: Customers might encounter challenges configuring custom domains with SSL certificates or DNS settings. Understanding Vercel Features: Some users may need help grasping concepts like serverless functions, edge functions, or environment variables. Troubleshooting Application Errors: Runtime errors, API integration problems, or unexpected behavior can be sources of frustration. Overcoming Common Problems:

Short-term:

Clear Documentation: Vercel's documentation and knowledge base should provide clear instructions and troubleshooting steps. Error Messages and Logs: Detailed error messages and logs can pinpoint the root cause of issues. Support Channels: Vercel offers various support channels like forums and chat for immediate assistance. Long-term:

Improved Error Handling: Vercel can strive for more informative and actionable error messages. Interactive Tutorials and Guides: Interactive tutorials and code examples can help users learn Vercel concepts more effectively. Community Building: A strong Vercel community can foster peer-to-peer support and knowledge sharing

<h2>10. How could we improve or alter this familiarisation exercise?</h2>
Here are some suggestions for improving the familiarization exercise:

Provide a Sandbox Environment: A pre-configured Vercel project with sample code could streamline the process. Integrate Feedback Mechanisms: Allow participants to provide feedback throughout the exercise to identify areas for improvement. Cater to Different Skill Levels: Offer tiered exercises with varying complexity to accommodate different experience levels. Focus on Practical Application: Emphasize real-world scenarios and troubleshooting techniques relevant to support tasks. Open-Ended Challenges: Include open-ended challenges that encourage creative problem-solving and initiative. By incorporating these suggestions, the familiarization exercise can be a more engaging and informative experience for potential Vercel support staff.
  '}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
