import React from 'react'
import { Box, useTheme, Typography } from '@mui/material'
import Header from '../../components/Header'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { tokens } from '../../theme'
const FAQ = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)

	return (
		<Box m='20px'>
			<Header title='FAQ' subtitle='Frequently Asked Questions Page' />
			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant='h5'>
						An Important question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
						velit hic voluptates quia adipisci repellat!
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant='h5'>
						Lorem ipsum dolor sit amet consectetur adipisicing.
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
						velit hic voluptates quia adipisci repellat!
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant='h5'>
						Lorem ipsum dolor sit amet.
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
						velit hic voluptates quia adipisci repellat!
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant='h5'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
						velit hic voluptates quia adipisci repellat!
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant='h5'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis?
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
						velit hic voluptates quia adipisci repellat!
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant='h5'>
						Lorem ipsum dolor sit amet.
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
						velit hic voluptates quia adipisci repellat!
					</Typography>
				</AccordionDetails>
			</Accordion>
		</Box>
	)
}

export default FAQ
