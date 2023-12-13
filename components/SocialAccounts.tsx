import { Facebook, Github, Linkedin, Mail, Youtube } from 'lucide-react'
import { siteMetadata } from '~/data/siteMetadata'

export default function SocialAccounts() {
  return (
    <div>
      <p className="my-3">Get in touch with me via my social media accounts:</p>
      <div className="flex space-x-4 items-center">
        <a
          href={siteMetadata.github}
          target="_blank"
          className="text-sm text-dark dark:text-white"
          data-umami-event="contact-github"
          rel="noopener noreferrer"
        >
          <span className="sr-only">Github</span>
          <Github strokeWidth={1.5} />
        </a>
        <a
          href={siteMetadata.linkedin}
          target="_blank"
          className="text-sm text-dark dark:text-white"
          data-umami-event="contact-linkedin"
          rel="noopener noreferrer"
        >
          <span className="sr-only">Linkedin</span>
          <Linkedin strokeWidth={1.5} />
        </a>
        <a
          href={`mailto:${siteMetadata.email}`}
          target="_self"
          className="text-sm text-dark dark:text-white"
          data-umami-event="contact-mail"
          rel="noopener noreferrer"
        >
          <span className="sr-only">Mail</span>
          <Mail strokeWidth={1.5} />
        </a>
        <a
          href={siteMetadata.facebook}
          target="_self"
          className="text-sm text-dark dark:text-white"
          data-umami-event="contact-facebook"
          rel="noopener noreferrer"
        >
          <span className="sr-only">Facebook</span>
          <Facebook strokeWidth={1.5} />
        </a>
        <a
          href={siteMetadata.youtube}
          target="_self"
          className="text-sm text-dark dark:text-white"
          data-umami-event="contact-youtube"
          rel="noopener noreferrer"
        >
          <span className="sr-only">Youtube</span>
          <Youtube strokeWidth={1.5} />
        </a>
      </div>
    </div>
  )
}
