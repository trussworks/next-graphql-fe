import { ReactElement } from "react"
import {
  act,
  render,
  RenderOptions,
  RenderResult,
} from "@testing-library/react"
import * as optionTypes from "@testing-library/dom/types/queries"
import { QueryClient, QueryClientProvider } from "react-query"
import { axe } from "jest-axe"

/**
 * Render using the react testing library, wrapped in a new react-query client
 * @param ui - React element to render
 * @param options - Render options: https://testing-library.com/docs/react-testing-library/api#render-options
 * @returns Rendered react element
 */
const renderWithQueryClient = (
  ui: ReactElement,
  options?: RenderOptions<typeof optionTypes, HTMLElement>
): RenderResult => {
  const Wrapper: React.FC<{}> = ({ children }) => (
    <QueryClientProvider
      client={
        new QueryClient({
          defaultOptions: {
            queries: {
              retry: false,
            },
          },
        })
      }
    >
      {children}
    </QueryClientProvider>
  )

  return render(ui, { wrapper: Wrapper, ...options })
}

/**
 * Check for accessibility violations using jest-axe
 * @param ui - The react element to examine
 */
const validateA11y = async (element: HTMLElement) => {
  await act(async () => {
    // Run aXe a11y scan
    const results = await axe(element)

    // Assert there are no a11y violations
    expect(results).toHaveNoViolations()
  })
}

export { renderWithQueryClient, validateA11y }
